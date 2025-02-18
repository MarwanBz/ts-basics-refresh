// complex interfaces in typescript 
// interfaces using built-in utility types

interface BaseConfig {
    endpoint: string;
    timeout: number;
    retries: number;
}

// partial interface => all properties are optional
interface PartailConfig extends Partial<BaseConfig> {
    version: string;
}

// readonly interface => all properties readonly
interface ImmutableConfig extends Readonly<BaseConfig> {
    id: string;
}

// picking specific properties 
interface MinimalConfig extends Pick<BaseConfig, "endpoint" | "timeout"> {
    debug: boolean;
}

// recursive interfaces 
// self referential interface structure
interface MenuItem {
    name: string;
    subItems?: MenuItem[];
}

interface Comment {
    text: string;
    replies?: Comment[];
}

// discriminated unions with interfaces
interface SuccessResponse {
    type: "success";
    data: unknown;
    timestamp: number;
}

interface ErrorResponse {
    type: "error";
    error: string;
    code: number;
}

interface PendingResponse {
    type: "pending";
    startedAt: number;
}


type MyApiResponse = SuccessResponse | ErrorResponse | PendingResponse

// type guard for API response 
const handleResponse = (response: MyApiResponse): void => {
    switch (response.type) {
        case "success":
            console.log("Success fetching data:", response.data);
            break;
        case "error":
            console.log("Error couldn't fetch data:", response.error);
            break;
        case "pending":
            console.log("Fetching data started at: ", response.startedAt);
            break;
    }
}


// calling the interfaces and testing them
console.log("\n=== complex interfaces examples ===\n");

// utillity type interface
const PartailConfig: PartailConfig = {
    version: "1.0.0",
    endpoint: "/api",
    // retries: 3,  optional property
    // timeout: 5000 optional property
}

// recursive interface
const menu: MenuItem = {
    name: "Main menu",
    subItems: [
        {
            name: "file",
            subItems: [
                {
                    name: "new",
                    
                },
                {
                    name: "open"
                }
            ]
        },
        {
            name: "Edit",
            subItems: [
                { name: "Copy" },
                { name: "Paste" }
            ]
        }
    ],
}

// discriminated unions
const responses: MyApiResponse[] = [
    { type: 'success', data: { id: 1 }, timestamp: Date.now() },
    { type: 'error', error: 'Not found', code: 404 },
    { type: 'pending', startedAt: Date.now() }
];

responses.forEach(handleResponse);


