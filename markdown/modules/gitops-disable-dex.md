{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling Dex {id="gitops-disable-dex_{{ context }}"}

Dex is installed by default for all the Argo CD instances created by the Operator. You can configure {{ gitops_title }} to use Dex as the SSO authentication provider by setting the `.spec.dex` parameter.


:::important

In {{ gitops_title }} v1.6.0, `DISABLE_DEX` is deprecated and is planned to be removed in {{ gitops_title }} v1.10.0. Consider using the `.spec.sso.dex` parameter instead. See "Enabling or disabling Dex using .spec.sso".

:::


**Procedure**

*   Set the environmental variable `DISABLE_DEX` to `true` in the YAML resource of the Operator:
    ```yaml
    ...
    spec:
      config:
        env:
        - name: DISABLE_DEX
          value: "true"
    ...
    ```