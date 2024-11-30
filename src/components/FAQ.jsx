import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "Why I should choose zinmiral?",
    answer:
      "Opting for Zinmiral means partnering with a results-oriented, client-centric, and tech-savvy digital marketing expert. With a strong track record, tailored strategies, and a focus on clear communication, we are dedicated to enhancing your online presence and ensuring lasting business success.",
  },
  {
    question: "What sets Zinmiral apart from the Adency?",
    answer:
      "Zinmiral shines in the competitive digital advertising space with its cutting-edge technology, tailored solutions, data-driven strategies, and a strong history of success.",
  },
  {
    question: "How can Zinmiral guarantee accurate reporting?",
    answer:
      "Zinmiral ensures accuracy through cutting-edge technology, real-time checks, transparency, expert professionals, and strict quality control. With Adymize, clients can rely on reports that are trustworthy and always reflect the most up-to-date data.",
  },
];

const Faq = () => {
  return (
    <section id="faqs" className="mt-12">
      <div className=" ">
        <h2 className="text-center text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-bold leading-tight lg:leading-[62px] mb-12">
          FAQ - Curious minds want to know{" "}
        </h2>
      </div>
      <div className="container mx-auto flex flex-col px-3 mt-8">
        {faqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-normal text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;
