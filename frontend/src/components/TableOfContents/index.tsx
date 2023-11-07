import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import contentCh1 from "../../content/genki/genki1/ch1";
import contentCh2 from "../../content/genki/genki1/ch2";
import contentCh3 from "../../content/genki/genki1/ch3";
import contentCh4 from "../../content/genki/genki1/ch4";
import contentCh5 from "../../content/genki/genki1/ch5";
import contentCh6 from "../../content/genki/genki1/ch6";
import contentCh7 from "../../content/genki/genki1/ch7";
import { HashLink } from "react-router-hash-link";

const contentGenki1 = [contentCh1, contentCh2, contentCh3, contentCh4, contentCh5, contentCh6, contentCh7];

const tableContent = contentGenki1.map((x) => {
    return { chapter: x.chapter, titleEnglish: x.title.english, titleKana: x.title.japanese.kana };
});

function createLink(chapterName: string) {
    return "/genki/1/study#" + chapterName.toLowerCase().replaceAll(" ", "");
}

function TableOfContents() {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableBody>
                    {tableContent.map((row) => (
                        // hide last border in sx
                        <TableRow
                            key={row.chapter}
                            component={HashLink}
                            to={createLink(row.chapter)}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 }, textDecoration: "none" }}>
                            <TableCell sx={{ fontSize: 24 }}>{row.chapter}</TableCell>
                            <TableCell sx={{ fontSize: 18 }}>{row.titleKana}</TableCell>
                            <TableCell sx={{ fontSize: 18 }}>{row.titleEnglish}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableOfContents;
