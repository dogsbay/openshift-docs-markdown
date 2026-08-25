{%- set _mod_docs_content_type = "CONCEPT" %}
# Guidelines for the image-based upgrade {id="cnf-image-based-upgrade-guidelines_{{ context }}"}

Your deployments must meet specific requirements for a successful image-based upgrade, which can be performed using either {{ ztp }} or non-GitOps deployment methods. {._abstract}

For a successful image-based upgrade, your deployments must meet certain requirements.

There are different deployment methods in which you can perform the image-based upgrade:


{{ ztp }}
:   You use the {{ ztp_first }} to deploy and configure your clusters.

Non-GitOps
:   You manually deploy and configure your clusters.

You can perform an image-based upgrade in disconnected environments. For more information about how to mirror images for a disconnected environment, see "Mirroring images for a disconnected installation".