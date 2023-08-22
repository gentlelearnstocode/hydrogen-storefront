import {useLoaderData} from '@remix-run/react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import type {Seo} from '@shopify/hydrogen/storefront-api-types';

import {ProductGrid} from '@/components/common';
import {COLLECTION_QUERY} from './api/queries';

export async function loader({params, context}: LoaderArgs) {
  const {handle} = params;
  const {collection} = await context.storefront.query(COLLECTION_QUERY, {
    variables: {
      handle,
    },
  });

  if (!collection) {
    throw new Response(null, {status: 404});
  }

  return json({
    collection,
  });
}

const seo = ({data}): Seo => ({
  title: data?.collection?.title,
  description: data?.collection?.description.substr(0, 154),
});

export const handle = {
  seo,
};

export default function Collection() {
  const {collection} = useLoaderData();
  return (
    <>
      <header className="grid w-full gap-8 py-8 justify-items-start">
        <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
          {collection.title}
        </h1>

        {collection.description && (
          <div className="flex items-baseline justify-between w-full">
            <div>
              <p className="max-w-md whitespace-pre-wrap inherit text-copy inline-block">
                {collection.description}
              </p>
            </div>
          </div>
        )}
      </header>
      <ProductGrid
        collection={collection}
        url={`/collections/${collection.handle}`}
      />
    </>
  );
}
