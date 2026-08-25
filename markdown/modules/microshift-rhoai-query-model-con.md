{%- set _mod_docs_content_type = "CONCEPT" %}
# About querying your AI model {id="microshift-rhoai-query-model-con_{{ context }}"}

Querying your model through the API is also called model inferencing. Model inferencing is most often used to retrieve information, automate tasks, make predictions, provide data insights, or perform actions. {._abstract}

In general, queries must be constructed using a format compatible with the AI model being used. A model-serving runtime formats queries automatically. The model processes the query according to the underlying training and data, then provides an output. The output is expected to align with the purpose of the model itself, whether that be to give an answer, make a prediction, or perform a task.

The following examples outline general steps to make sure your model is ready for inferencing, and what you might expect in a query output from the serving runtime.