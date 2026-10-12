{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand the machine lifecycle {id="understand-the-machine-lifecycle-con_{{ context }}"}

A machine moves through a set of phases from the moment it is requested to the moment it is removed. Knowing the current phase tells you whether a process finished, and the deletion phase can be interrupted by a lifecycle hook that another controller owns.