{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding tags to an image stream {id="images-imagestream-adding-tags_{{ context }}"}

To accurately manage and track specific versions of your container images, add tags to your image streams within {{ product_title }}, This ensures reliable referencing and deployment throughout your environment. {._abstract}

**Procedure**

*   Add a tag that points to one of the existing tags by using the `oc tag`command:
    ```terminal
    $ oc tag <image-name:tag1> <image-name:tag2>
    ```

    For example:
    ```terminal
    $ oc tag python:3.5 python:latest
    ```
    ```terminal title="Example output"
    Tag python:latest set to python@sha256:49c18358df82f4577386404991c51a9559f243e0b1bdc366df25.
    ```
*   Confirm the image stream has two tags, one, `3.5`, pointing at the external container image and another tag, `latest`, pointing to the same image because it was created based on the first tag.
    ```terminal
    $ oc describe is/python
    ```
    ```terminal title="Example output"
    Name:			python
    Namespace:		default
    Created:		5 minutes ago
    Labels:			<none>
    Annotations:		openshift.io/image.dockerRepositoryCheck=2017-10-02T17:05:11Z
    Docker Pull Spec:	docker-registry.default.svc:5000/default/python
    Image Lookup:		local=false
    Unique Images:		1
    Tags:			2

    latest
      tagged from python@sha256:49c18358df82f4577386404991c51a9559f243e0b1bdc366df25

      * centos/python-35-centos7@sha256:49c18358df82f4577386404991c51a9559f243e0b1bdc366df25
          About a minute ago

    3.5
      tagged from centos/python-35-centos7

      * centos/python-35-centos7@sha256:49c18358df82f4577386404991c51a9559f243e0b1bdc366df25
          5 minutes ago
    ```