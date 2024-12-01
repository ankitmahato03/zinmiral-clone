import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const WhyZinmiral = () => {
  return (
    <section id="why-zinmiral" className="mt-12">
      <div className="container mx-auto px-4 flex flex-col justify-center">
        <h1 className="text-black text-center text-[36px] sm:text-[44px] lg:text-[52px] font-bold leading-[42px] sm:leading-[52px] lg:leading-[62px]">
          Why You Choose Zinmiral?
        </h1>
        <p className="text-black text-center font-normal mb-12">
          Zinmiral v/s Others
        </p>

        <div className="overflow-x-auto w-full container mx-auto max-w-2xl">
          <Table className="w-full text-center text-sm sm:text-base border-collapse">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="px-4 py-3 font-semibold text-gray-700 text-center">
                  Zinmiral
                </TableHead>
                <TableHead className="px-4 py-3 font-semibold text-gray-700 text-center">
                  Others
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="px-4 py-3 font-semibold text-gray-600">
                  Faster and quick responses
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-600">
                  Longer turnaround time
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="px-4 py-3 font-semibold text-gray-600">
                  Ethical Approach
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-600">
                  Mediocre methods
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="px-4 py-3 font-semibold text-gray-600">
                  Accurate Reporting
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-600">
                  Lack of timely reporting
                </TableCell>
              </TableRow>
              <TableRow className="hover:bg-gray-50">
                <TableCell className="px-4 py-3 font-semibold text-gray-600">
                  Precise Resolutions
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-600">
                  No prompt answers
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default WhyZinmiral;
