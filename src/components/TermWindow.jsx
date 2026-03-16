export default function TermWindow({ title, promptCmd, promptArg, promptFlag, annotation, children }) {
  return (
    <div className="term-window">
      <div className="term-titlebar">
        <div className="term-dots">
          <div className="term-dot"></div><div className="term-dot"></div><div className="term-dot"></div>
        </div>
        <div className="term-title">{title}</div>
        <span>⌘</span>
      </div>
      <div className="term-body">
        <div className="prompt-line">
          <span className="prompt-user">dev</span>
          <span className="prompt-at">@</span>
          <span className="prompt-host">portfolio</span>
          <span className="prompt-path"> ~ </span>
          <span className="prompt-dollar">$</span>
          <span className="prompt-cmd">{promptCmd}</span>
          {promptArg && <span className="prompt-arg">{promptArg}</span>}
          {promptFlag && <span className="prompt-flag">{promptFlag}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}
