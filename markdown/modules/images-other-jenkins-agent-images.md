{%- set _mod_docs_content_type = "REFERENCE" %}
# Jenkins agent images {id="images-other-jenkins-agent-images_{{ context }}"}

The {{ product_title }} Jenkins agent images are available on [Quay.io](https://quay.io) or [registry.redhat.io](https://registry.redhat.io).

Jenkins images are available through the Red Hat Registry:

```terminal
$ docker pull registry.redhat.io/ocp-tools-4/jenkins-rhel8:<image_tag>
```

```terminal
$ docker pull registry.redhat.io/ocp-tools-4/jenkins-agent-base-rhel8:<image_tag>
```

To use these images, you can either access them directly from [Quay.io](https://quay.io) or [registry.redhat.io](https://registry.redhat.io) or push them into your {{ product_title }} container image registry.