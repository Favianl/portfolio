const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className='text-center'>
      <h2 className='inline-block bg-gray-color bg-opacity-10 text-lg text-light-blue-color py-1 px-6 rounded-2xl'>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
