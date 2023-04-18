// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const url = 'https://www.boredapi.com/api/activity';

export default function fetchActivity(group: string) {
  return fetch(`${url}?type=${group}`).then((res) => res.json());
}
