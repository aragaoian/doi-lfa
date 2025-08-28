from graphviz import Digraph

g = Digraph()

# Nodes
g.node("q0", "", shape="plaintext")
g.node("q1", "q1", shape="circle")
g.node("q2", "q2", shape="circle")
g.node("q3", "q3", shape="circle")
g.node("q4", "q4", shape="circle")
g.node("q5", "q5", shape="circle")
g.node("q6", "q6", shape="circle")
g.node("q7", "q7", shape="circle")
g.node("q8", "q8", shape="circle")
g.node("q10", "q10", shape="doublecircle")

# Ligações
g.edge("q0", "q1", "")
g.edge("q1", "q2", "1")
g.edge("q2", "q3", "0")
g.edge("q3", "q4", ".")
g.edge("q4", "q5", "[0-9]")
g.edge("q5", "q6", "[0-9]")
g.edge("q6", "q7", "[0-9]")
g.edge("q7", "q8", "[0-9]")
g.edge(
    "q8",
    "q8",
    label="[0-9],.",
    labeldistance="2",
    labelangle="30",
)
g.edge("q8", "q10", "")


# Configurações do AFD
g.edge_attr.update(arrowhead="vee")
g.graph_attr["rankdir"] = "LR"
g.render(
    "my_graph.gv", format="png", view=True
)  # Renders to my_graph.gv.pdf and opens it
