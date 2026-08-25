{%- set _mod_docs_content_type = "REFERENCE" %}
# Allowing pods to reference images from other secured registries {id="images-allow-pods-to-reference-images-from-secure-registries_{{ context }}"}

Pull secrets enable pods in {{ product_title }} to authenticate with secured registries and pull container images. Docker and Podman store authentication credentials in configuration files that you can use to create pull secrets for your service accounts. {._abstract}

The following files store your authentication information if you have previously logged in to a secured or insecure registry:

*   **Docker**: By default, Docker uses `$HOME/.docker/config.json`.
*   **Podman**: By default, Podman uses `$HOME/.config/containers/auth.json`.


:::note

Both Docker and Podman credential files and the associated pull secret can contain multiple references to the same registry if they have unique paths, for example, `quay.io` and `quay.io/<example_repository>`. However, neither Docker nor Podman support multiple entries for the exact same registry path. 

:::


```json title="Example config.json file"
{
   "auths":{
      "cloud.openshift.com":{
         "auth":"b3Blb=",
         "email":"you@example.com"
      },
      "quay.io":{
         "auth":"b3Blb=",
         "email":"you@example.com"
      },
      "quay.io/repository-main":{
         "auth":"b3Blb=",
         "email":"you@example.com"
      }
   }
}
```

```yaml title="Example pull secret"
apiVersion: v1
data:
  .dockerconfigjson: ewogICAiYXV0aHMiOnsKICAgICAgIm0iOnsKICAgICAgIsKICAgICAgICAgImF1dGgiOiJiM0JsYj0iLAogICAgICAgICAiZW1haWwiOiJ5b3VAZXhhbXBsZS5jb20iCiAgICAgIH0KICAgfQp9Cg==
kind: Secret
metadata:
  creationTimestamp: "2021-09-09T19:10:11Z"
  name: pull-secret
  namespace: default
  resourceVersion: "37676"
  uid: e2851531-01bc-48ba-878c-de96cfe31020
type: Opaque
```