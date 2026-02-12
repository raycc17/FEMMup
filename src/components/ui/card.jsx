export function Card({ className = "", ...props }) {
  return <div className={`bg-white border border-gray-200 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={className} {...props} />;
}
