{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling or disabling Dex using .spec.sso {id="gitops-disable-dex-using-spec-sso_{{ context }}"}

You can configure {{ gitops_title }} to use Dex as its SSO authentication provider by setting the `.spec.sso` parameter.

**Procedure**

1.  To enable Dex, set the `.spec.sso.provider: dex` parameter in the YAML resource of the Operator:

    ```yaml
    ...
    spec:
      sso:
        provider: dex
        dex:
          openShiftOAuth: true
    ...
    ```
1.  To disable dex, either remove the `spec.sso` element from the Argo CD custom resource, or specify a different SSO provider.