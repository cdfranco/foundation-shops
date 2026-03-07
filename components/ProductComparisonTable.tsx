import AffiliateButton from './AffiliateButton';

export interface ComparisonRow {
  feature: string;
  values: (string | number | boolean)[];
}

interface ProductComparisonTableProps {
  headers: string[];
  rows: ComparisonRow[];
  productLinks?: string[];
}

export default function ProductComparisonTable({
  headers,
  rows,
  productLinks,
}: ProductComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-soft">
      <table className="min-w-full divide-y divide-neutral-200">
        <thead>
          <tr className="bg-neutral-50">
            <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 sm:px-6">
              Feature
            </th>
            {headers.map((header, i) => (
              <th
                key={i}
                className="px-4 py-3 text-center text-sm font-semibold text-neutral-700 sm:px-6"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'}
            >
              <td className="px-4 py-3 text-sm font-medium text-neutral-900 sm:px-6">
                {row.feature}
              </td>
              {row.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className="px-4 py-3 text-center text-sm text-neutral-600 sm:px-6"
                >
                  {typeof value === 'boolean' ? (value ? '✓' : '—') : String(value)}
                </td>
              ))}
            </tr>
          ))}
          {productLinks && productLinks.length > 0 && (
            <tr className="bg-neutral-50">
              <td className="px-4 py-3 text-sm font-medium text-neutral-700 sm:px-6">
                —
              </td>
              {productLinks.map((link, i) => (
                <td key={i} className="px-4 py-3 text-center sm:px-6">
                  <AffiliateButton
                    href={link}
                    label="Check Price"
                    className="inline-flex"
                  />
                </td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
