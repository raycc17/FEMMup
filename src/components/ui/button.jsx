export function Button({ className = "", variant = "default", ...props }) {
  const variantClass =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-800 hover:bg-gray-100"
      : "bg-gray-900 text-white hover:bg-gray-800";

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition ${variantClass} ${className}`}
      {...props}
    />
  );
}
