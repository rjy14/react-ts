import { memo } from "react";

// function Search() {
//     const [searchKeyword, setSearchKeyword] = useState<string>("");
//     const handleSearchChange = useCallback(
//         (event: React.ChangeEvent<HTMLInputElement>) => {
//           setSearchKeyword(event.target.value);
//         //   setCurrentPage(1);
//           console.log("search")
//         },
//         [setSearchKeyword]
//       );
//   return (
//     <div className="search-box">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchKeyword}
//         onChange={handleSearchChange}
//         style={{
//           borderRadius: "90px",
//           border: "1px solid #ccc",
//           width: "280px",
//         }}
//       />
//     </div>
//   );
type SearchProps = {
  onChange: (text: string) => void;
}

function Search({ onChange }: SearchProps) {
  console.log("search rendered");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        //value={searchKeyword}
        onChange={(e) => onChange(e.target.value)}
        style={{
          borderRadius: "90px",
          border: "1px solid #ccc",
          width: "280px",
        }}
      />
    </div>
  );
}

export default memo(Search);
