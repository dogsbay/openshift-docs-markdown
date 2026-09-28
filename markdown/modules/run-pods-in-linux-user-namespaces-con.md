{%- set _mod_docs_content_type = "CONCEPT" %}
# Run pods in Linux user namespaces {id="run-pods-in-linux-user-namespaces-con_{{ context }}"}

To enhance container security and reduce the impact of a container breakout, you can isolate pod processes by using Linux user namespaces. Containers can then run with administrative privileges inside the namespace while remaining unprivileged on the host system.