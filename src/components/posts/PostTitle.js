import * as React from "react";
import { useRecordContext } from "react-admin"


export const PostTitle = () => {
    const record = useRecordContext();

    return(
        <span>
            Post {record ? `"${record.title}"`:'' }
        </span>
    );
}