import { walk, parse } from "svelte/compiler";

function insertAt(string, index, text) {
    return string.substring(0, index) + text + string.substring(index);
  }
  
  function removeAt(string, from, to) {
    return string.substring(0, from) + string.substring(to);
  }
  
  function replaceAt(string, index, text) {
    return (
      string.substring(0, index) + text + string.substring(index + text.length)
    );
  }

export default {
    markup: (x) => {
      const content = x.content;
      let result = content;

      const ast = parse(content);

      walk(ast.html, {
        enter(node, parent, key, index) {
          if (node.type === "Literal") {
            console.log("Literal", node);
          }
          if (node.type === "Attribute" && node.name === "if") {
            const value = `{#if ${content.substring(
              node.start + 4,
              node.end - 1
            )}}`;

            result = removeAt(result, node.start - 1, node.end);
            result = insertAt(result, parent.start, value);

            // TODO fix this
            result = replaceAt(result, parent.end-1, "»");
          }
        },
      });

      result = result.replace(/»/g, ">{/if}");

      console.log(result)
      return {
        code: result,
      };
    },
  }