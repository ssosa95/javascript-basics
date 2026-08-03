const repo = ["python-basics", "sqlite-basics", "bash-practice", "html-css-basics", "javascript-basics"];
console.log(repo);
console.log(repo[0]);
console.log(repo[1]);
console.log(repo[2]);
console.log(repo[3]);
console.log(repo[4]);


const skills = {
    python: "intermediate",
    bash: "intermediate",
    SQL: "intermediate",
    HTML: "basic"
};


console.log(skills);
console.log(skills.python);

repo[0] = "bash-practice";
repo[2] = "python-basics";

console.log(repo);

skills.python = "advanced";
console.log(skills);