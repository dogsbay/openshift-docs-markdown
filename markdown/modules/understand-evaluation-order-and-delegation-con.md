{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand evaluation order and delegation {id="understand-evaluation-order-and-delegation-con_{{ context }}"}

Layered network policies are evaluated in a defined order, and the `Pass` action delegates a decision from one tier to the next. Understand how the tiers combine before you deploy them together.