import ast
import astor

class PythonToO1JS(ast.NodeTransformer):
    def visit_BinOp(self, node):
        if isinstance(node.op, ast.Add):
            new_node = ast.Call(
                func=ast.Attribute(
                    value=ast.Call(
                        func=ast.Name(id='Field', ctx=ast.Load()),
                        args=[self.generic_visit(node.left)],
                        keywords=[]
                    ),
                    attr='add',
                    ctx=ast.Load()
                ),
                args=[self.generic_visit(node.right)],
                keywords=[]
            )
            return ast.Call(
                func=ast.Name(id='Field', ctx=ast.Load()),
                args=[new_node],
                keywords=[]
            )
        return node

    def visit_Num(self, node):
        return ast.Str(s=str(node.n))

def translate_to_o1js(python_code):
    tree = ast.parse(python_code)
    transformer = PythonToO1JS()
    new_tree = transformer.visit(tree)
    return astor.to_source(new_tree)

python_code = """
result = 5 + 3
"""
o1js_code = translate_to_o1js(python_code)
print(o1js_code)
