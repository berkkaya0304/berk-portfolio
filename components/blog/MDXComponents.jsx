const MDXComponents = {
  h1: (props) => (
    <h1
      {...props}
      className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700"
    />
  ),
  h2: (props) => (
    <h2
      {...props}
      className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700"
    />
  ),
  p: (props) => <p {...props} className="text-blue-400/80 mb-4" />,
  a: (props) => (
    <a
      {...props}
      className="text-blue-400 hover:text-blue-500 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    />
  ),
  code: (props) => (
    <code
      {...props}
      className="bg-blue-400/10 rounded px-1.5 py-0.5 text-blue-400"
    />
  ),
  pre: (props) => (
    <pre
      {...props}
      className="bg-blue-400/10 rounded-xl p-4 mb-4 overflow-x-auto"
    />
  ),
};

export default MDXComponents;
