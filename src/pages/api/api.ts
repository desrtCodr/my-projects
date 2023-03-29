// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type type = {
  name: string;
};
const url = 'https://www.boredapi.com/api/activity';

export default function fetchActivity(type: type) {
  return fetch(`${url}?type=${type}`).then((res) => res.json());
}
