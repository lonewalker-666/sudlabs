import Head from "next/head";

interface HeaderProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Header = ({ title, description, keywords }: HeaderProps) => {
  return (
    <Head>
      <title>{title || "SudLabs"}</title>
      <meta
        name="description"
        content={
          description ||
          "All-in-one software Powering Small Business Growth at Every Step"
        }
      />
      {/* <meta name="keywords" content={keywords || "coworking, office, WorkEZ"} /> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  );
};
