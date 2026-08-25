{%- set _mod_docs_content_type = "PROCEDURE" %}
# Acknowledging the y-stream release update {id="update-acknowledging-the-y-stream-release-update_{{ context }}"}

When moving between y-stream releases, you must run a patch command to explicitly acknowledge the update.
In the output of the `oc adm upgrade` command, a URL is provided that shows the specific command to run. {._abstract}

**Prerequisites**

{% include "./snippets/acknowledge-the-update.md" %}