'use client'

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEventHandler,
} from 'react'

const OUTPUT_SEPARATOR = '|'

const defaultMsg = 'Welcome to the React Terminal UI Demo!'

function addCommandToHistory(currentCommands: string, command: string) {
  return `${currentCommands}${OUTPUT_SEPARATOR}${command}`
}

export default function CLIWindow() {
  const [terminalLineData, setTerminalLineData] = useState(defaultMsg)

  const terminalInput = useRef<HTMLInputElement>(null)

  const renderTerminalOutput = useMemo(
    () =>
      terminalLineData
        .split(OUTPUT_SEPARATOR)
        .map((output, idx) => <div key={idx}>{output}</div>),
    [terminalLineData],
  )

  const handleInput = useCallback<FormEventHandler<HTMLFormElement>>((e) => {
    e.preventDefault()
    const command = new FormData(e.currentTarget)
      .get('terminal-input')
      ?.toString()
      .trim()

    if (!command) {
      return
    }

    switch (command.toLowerCase()) {
      case 'clear': {
        setTerminalLineData(defaultMsg)
        break
      }

      default: {
        setTerminalLineData((curr) =>
          addCommandToHistory(curr, `out: command not found: ${command}`),
        )
        break
      }
    }

    e.currentTarget.reset()
    setTimeout(() =>
      terminalInput.current?.scrollIntoView({behavior: 'smooth'}),
    )
  }, [])

  useEffect(() => {
    const scrollTimeoutId = setTimeout(() =>
      terminalInput.current?.scrollIntoView({behavior: 'smooth'}),
    )

    return () => clearTimeout(scrollTimeoutId)
  }, [terminalLineData])

  return (
    <div
      className="bg-reverse flex size-full flex-col gap-2 overflow-hidden rounded-lg pb-4 font-geistMono"
      onClick={() => terminalInput.current?.focus()}
    >
      <header className="flex items-center border-b border-b-slate-800 px-4 py-2">
        <div className="flex-center gap-2">
          <button
            className="h-3 w-3 rounded-full bg-red-500"
            type="button"
          ></button>
          <button
            className="h-3 w-3 rounded-full bg-yellow-500"
            type="button"
          ></button>
          <button
            className="h-3 w-3 rounded-full bg-green-500"
            type="button"
          ></button>
        </div>
        <h2 className="flex-1 truncate pr-12 text-center">Terminal Title</h2>
      </header>
      <div className="flex-1 overflow-y-auto px-4">
        <pre id="terminal-output">{renderTerminalOutput}</pre>
        <form
          id="terminal-form"
          className="flex items-center gap-2"
          onSubmit={handleInput}
        >
          <span className="text-sm text-zinc-500">$</span>
          <input
            ref={terminalInput}
            className="w-full border-none bg-transparent outline-none [caret-shape:block]"
            type="text"
            name="terminal-input"
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  )
}
