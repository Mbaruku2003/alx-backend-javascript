import ClassRoom from './0-classroom';

export default function initialiseRooms() {
  const leo = new ClassRoom(19);
  const Mbaruk = new ClassRoom(20);
  const Jembe = new ClassRoom(34);
  const obj = [
    leo,
    Mbaruk,
    Jembe,
  ];
  return obj;
}
