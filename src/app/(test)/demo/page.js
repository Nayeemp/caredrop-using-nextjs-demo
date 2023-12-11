export const metadata = {
  title: "Testing",
  description: "This is home page",
};

export default function Home() {
  return (
    <div className="container h-[100vh] w-[100vw]">
      <p>
        For plaintext Lorem Ipsum, type lorem then press the Ctrl-Shift-L
        keyboard shortcut. The default keyboard shortcut is the same for all
        supported platforms. You can also add options to the lorem command with
        an underscore character followed by the option name. For example:
        lorem_wrap40. Multiple options can also be chained together. For
        example, typing lorem_html_wrap40 and then pressing the Tab key will
        give you html formatted Lorem Ipsum text and a word wrap width of 40
        characters. Using an unrecognized option will insert an error message
        into the document. Using more than one underscore character in a row
        (e.g. lorem__html___p3) will insert an error message into the document.
        Note: Options to the far right of the chain always have the highest
        priority. If two options in the chain conflict with each other, the
        option on the right will have precedence. For example, the command
        lorem_nowrap_wrap40 will insert Lorem Ipsum text with a word wrap width
        of 40 characters and the command lorem_wrap40_nowrap will insert Lorem
        Ipsum text with no word wrapping. List of Current Options _p[count]:
        Inserts a certain number of random Lorem Ipsum paragraphs into the
        current document. The count option indicates how many paragraphs to
        insert. For example, lorem_p3 will insert three paragraphs into the
        document. If the count option is not provided, one paragraph will be
        inserted. If the type of Lorem Ipsum text is not specified, the
        extension will generate paragraphs by default. _s[count]: Inserts a
        certain number of random Lorem Ipsum sentences into the current
        document. The count option indicates how many sentences to insert. For
        example, lorem_s3 will insert three sentences into the document. If the
        count option is not provided, one sentence will be inserted. _w[count]:
        Inserts a certain number of random Lorem Ipsum words into the current
        document. The count option indicates how many words to insert. For
        example, lorem_w40 will insert 40 random words into the document. If the
        count option is not provided, one word will be inserted. _short: Makes
        all sentences or paragraphs short length. _medium: Makes all sentences
        or paragraphs medium length. If no size options are provided, the
        extension will use _medium as the default option. _long: Makes all
        sentences or paragraphs long length. _vlong: Makes all sentences or
        paragraphs very long length. _nowrap: Inserts Lorem Ipsum text without
        any word wrapping.
      </p>
    </div>
  );
}
