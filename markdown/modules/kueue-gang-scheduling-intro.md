{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure gang scheduling for {{ kueue_name }} jobs {id="kueue-gang-scheduling-intro_{{ context }}"}

You can use gang scheduling to ensure that a group, or gang, of related jobs starts only when all required resources are available.  {._abstract}

{{ kueue_name }} suspends jobs until the {{ product_title }} cluster can guarantee the capacity to start and run all of the related jobs together, which is also known as all-or-nothing scheduling.