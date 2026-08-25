{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Argo CD SSO using Dex GitHub connector {id="gitops-configuring-argo-cd-using-dex-github-connector_{{ context }}"}

**Procedure**

1.  Register the application in the identity provider as explained [here](https://argo-cd.readthedocs.io/en/stable/operator-manual/user-management/#1-register-the-application-in-the-identity-provider)
1.  Update the Argo CD CR.
1.  In the `dex.config` key, add the GitHub connector to the connectors sub field. See the [Dex GitHub connector documentation](https://github.com/dexidp/website/blob/main/content/docs/connectors/github.md). After adding the `clientID` and the `clientSecret` will be populated.
1.  Optional: In the `connectors.config.orgs` list, add one or more GitHub organizations. Any member of the org will then be able to login to Argo CD to perform management tasks.
    ```yaml
      apiVersion: argoproj.io/v1alpha1
    kind: ArgoCD
    metadata:
      name: example-argocd
      labels:
        example: openshift-oauth
    spec:
      dex:
        config: |
          connectors:
            # GitHub example
            - type: github
              id: github
              name: GitHub
              config:
                clientID: xxxxxxxxxxxxxx
                clientSecret: $dex.github.clientSecret # Alternatively $<some_K8S_secret>:dex.github.clientSecret
                orgs:
                - name: dummy-org
    ```