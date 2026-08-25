{%- set _mod_docs_content_type = "CONCEPT" %}
# Automation {id="olm-fb-catalogs-automation_{{ context }}"}

Operator authors and catalog maintainers can automate file-based catalog maintenance with CI/CD workflows. {._abstract}

Catalog maintainers can use GitOps automation to accomplish the following example tasks:

*   Check that pull request (PR) authors are permitted to make the requested changes, for example by updating their package’s image reference.
*   Check that the catalog updates pass the `opm validate` command.
*   Check that the updated bundle or catalog image references exist, the catalog images run successfully in a cluster, and Operators from that package can be successfully installed.
*   Automatically merge PRs that pass the previous checks.
*   Automatically rebuild and republish the catalog image.