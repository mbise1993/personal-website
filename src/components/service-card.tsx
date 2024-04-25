export interface ServiceCardProps {
  image: React.ReactNode;
  title: React.ReactNode;
  children: React.ReactNode;
}

export const ServiceCard = ({ image, title, children }: ServiceCardProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-4">
      <div>{image}</div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div>{children}</div>
    </div>
  );
};
