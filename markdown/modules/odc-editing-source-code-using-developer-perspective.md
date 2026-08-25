{%- set _mod_docs_content_type = "PROCEDURE" %}
# Editing the source code of an application using the Developer perspective {id="odc-editing-source-code-using-developer-perspective_{{ context }}"}

You can use the **Topology** view in the **Developer** perspective to edit the source code of your application.

**Procedure**

*   In the **Topology** view, click the **Edit Source code** icon, displayed at the bottom-right of the deployed application, to access your source code and modify it.

    :::note

    This feature is available only when you create applications using the **From Git**, **From Catalog**, and the **From Dockerfile** options.
    
    :::

{% if not (openshift_rosa or openshift_dedicated) %}

    If the **Eclipse Che** Operator is installed in your cluster, a Che workspace (![title="Che Workspace"](/_assets/images/odc_che_workspace.png)) is created and you are directed to the workspace to edit your source code. If it is not installed, you will be directed to the Git repository (![title="Git Repository"](/_assets/images/odc_git_repository.png)) your source code is hosted in.
{% endif %}