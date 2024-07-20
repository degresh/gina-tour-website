// components/ImageGrid.js
import Image from 'next/image';

const images = [
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
    alt: 'Wild Landscape',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/042.webp',
    alt: 'Camera',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/043.webp',
    alt: 'Exotic Fruits',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/044.webp',
    alt: 'Forest',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/045.webp',
    alt: 'Mountains',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/046.webp',
    alt: 'Beach',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/047.webp',
    alt: 'Desert',
  },
  {
    src: 'https://mdbcdn.b-cdn.net/img/new/slides/048.webp',
    alt: 'Cityscape',
  },
];

export default function Destination() {
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold text-left my-8">Destinasi Populer</h3>
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap">
          <div className="inline-block px-3">
            <StackedImageWithText
              src="/destinasi_masjidil_haram.jpg"
              alt="Masjidil Haram"
              title="Masjidil Haram"
              description="Masjidil Haram adalah masjid paling suci dalam Islam, terletak di Mekah, Arab Saudi."
            />
          </div>
          <div className="inline-block px-3">
            <StackedImageWithText
              src="/destinasi_masjid_nabawi.jpg"
              alt="Masjid Nabawi"
              title="Masjid Nabawi"
              description="Masjid Nabawi adalah masjid suci kedua dalam Islam, terletak di Madinah, Arab Saudi."
            />
          </div>
          <div className="inline-block px-3">
            <StackedImageWithText
              src="/destinasi_masjid_quba.jpeg"
              alt="Masjid Quba"
              title="Masjid Quba"
              description="Masjid Quba adalah masjid pertama yang dibangun dalam sejarah Islam, terletak di pinggiran Madinah, Arab Saudi."
            />
          </div>
          <div className="inline-block px-3">
            <StackedImageWithText
              src="/destinasi_jabal_rahmah.jpeg"
              alt="Jabal Rahmah"
              title="Jabal Rahmah"
              description="Jabal Rahmah adalah sebuah bukit di Padang Arafah. Bukit ini dikenal sebagai tempat di mana Nabi Adam dan Hawa bertemu kembali setelah diusir dari surga."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const StackedImageWithText = ({src, alt, title, description}) => {
  return (
    <div className="relative w-[360px] h-96 mx-1">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
      <div className="absolute w-full h-full place-content-end bg-black bg-opacity-50 text-white p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-lg">{description}</p>
      </div>
    </div>
  );
};

const ImageGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {images.map((img, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={img.src}
            alt={img.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md"
          />
        </div>
      ))}
    </div>
  );
};