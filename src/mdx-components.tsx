import React, { ComponentPropsWithoutRef } from "react";
import { Link } from "next-view-transitions";
import { highlight } from "sugar-high";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-4xl font-semibold pt-12 mb-4 fade-in " {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-3xl font-semibold mt-10 mb-4  text-gray-200"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-2xl font-semibold mt-8 mb-3  text-gray-300"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-xl font-medium mt-6 mb-2  text-gray-300" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-lg  leading-relaxed mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="list-decimal pl-6 space-y-2 " {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="list-disc pl-6 space-y-2 " {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-2 " {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium italic " {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold " {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className = "text-primary  hover:underline";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return (
      <code
        className="font-mono text-sm  bg-[#1f2937] px-2 py-1 rounded"
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        {...props}
      />
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border  border-[#1f2937]">
        <thead className=" bg-[#1f2937]">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-2 border  border-[#1f2937] text-left"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, index) => (
            <tr key={index} className="even: even:bg-[#1f2937]">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2 border  border-[#1f2937]"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="border-l-4  border-[#1f2937] pl-4 italic  text-gray-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
