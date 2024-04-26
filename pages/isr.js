export default function Isr({ time }) {
  return (
    <div>
      <h1>ISR</h1>
      <p>{time}</p>
    </div>
  );
}

export async function getStaticProps() {
  console.log("starting long running fetch")
  await new Promise((resolve) => setTimeout(resolve, 5000));
  console.log("finished long running fetch")
  return {
    props: {
      time: new Date().toISOString(),
    },
    revalidate: 60,
  };
}

