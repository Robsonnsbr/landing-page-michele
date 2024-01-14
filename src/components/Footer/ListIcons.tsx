import Link from 'next/link';
import React from 'react';
import {
  youTubeIcon,
  faceBookIcon,
  instagramIcon,
  linkedInIcon
} from 'public/assets/utils';
import Image from 'next/image';

function ListIcons() {
  return (
    <ul
      className="grid grid-cols-4 items-center pb-2"
      style={{ marginRight: '-6%' }}
    >
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={youTubeIcon}
            width={50}
            height={40}
            alt="ícone youTube"
            style={{ width: 50, height: 40 }}
          />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={instagramIcon}
            width={50}
            height={40}
            alt="ícone instagram"
            style={{ width: 50, height: 40 }}
          />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={faceBookIcon}
            width={50}
            height={40}
            alt="ícone faceBook"
            style={{ width: 50, height: 40 }}
          />
        </Link>
      </li>
      <li className="flex justify-center">
        <Link href="/">
          <Image
            src={linkedInIcon}
            width={50}
            height={40}
            alt="ícone linkedIn"
            style={{ width: 50, height: 40 }}
          />
        </Link>
      </li>
    </ul>
  );
}

export default ListIcons;
