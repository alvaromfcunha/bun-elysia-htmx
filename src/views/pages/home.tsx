import baseHead from "@views/utils/baseHead";

export default (text: string) =>

<html lang="en">
<head>
    {baseHead}
    <title>Hello World</title>
</head>
<body>
    <main class="h-screen bg-purple-400 flex items-center justify-center">
        <h1 class="font-bold text-(center 5xl white sm:gray-800 md:pink-700)">
            {text}
        </h1>
    </main>
</body>
</html>