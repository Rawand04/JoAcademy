export default function PrivacyAndPolicyPage({ content }) {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6 lg:p-10">
        
        {/* Title */}
        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 border-b pb-4">
          {content.title}
        </h1>

        {/* Content */}
        <div
          className="
            prose 
            prose-gray 
            max-w-none
            prose-headings:text-gray-800
            prose-p:text-gray-600
            prose-li:text-gray-600
            prose-a:text-blue-700
            prose-a:no-underline hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: content.body }}
        />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://www.joacademy.com/_next/data/how4QY69VvyX-qmAykQUT/en/privacy-policy.json"
  );

  const json = await res.json();

  const content = json.pageProps.data[0];

  return {
    props: { content },
  };
}