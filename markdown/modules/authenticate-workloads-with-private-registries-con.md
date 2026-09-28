{%- set _mod_docs_content_type = "CONCEPT" %}
# Authenticate workloads with private registries {id="authenticate-workloads-with-private-registries-con_{{ context }}"}

To pull images across projects or from secured registries, you configure image pull secrets from the registry authentication credentials in your `~/.docker/config.json` or `~/.config/containers/auth.json` file. You can apply those credentials to a single workload, to a project, or to the whole cluster through the global pull secret.