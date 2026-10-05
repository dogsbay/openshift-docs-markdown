{%- set _mod_docs_content_type = "REFERENCE" %}
# Example REST API call {id="security-integration-reference-example-api-call_{{ context }}"}

The following example call by using `curl` overrides the value of the annotation. Be sure to replace the values for `<token>`, `<openshift_server>`, `<image_id>`, and `<image_annotation>`. {._abstract}

```terminal title="Patch API call"
$ curl -X PATCH \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/merge-patch+json" \
  https://<openshift_server>:6443/apis/image.openshift.io/v1/images/<image_id> \
  --data '{ <image_annotation> }'
```

The following is an example of `PATCH` payload data:

```terminal title="Patch call data"
{
"metadata": {
  "annotations": {
    "quality.images.openshift.io/vulnerability.redhatcatalog":
       "{ 'name': 'Red Hat Ecosystem Catalog', 'description': 'Container health index', 'timestamp': '2020-06-01T05:04:46Z', 'compliant': null, 'reference': 'https://access.redhat.com/errata/RHBA-2020:2347', 'summary': [{'label': 'Health index', 'data': '4', 'severityIndex': 1, 'reference': null}] }"
    }
  }
}
```

{% if openshift_origin %}

:::note

Due to the complexity of this API call and challenges with escaping characters, an API developer tool such as Postman might assist in creating API calls.

:::

{% endif %}