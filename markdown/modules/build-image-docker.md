{%- set _mod_docs_content_type = "PROCEDURE" %}
# Build an image with Docker {id="build-image-with-docker_{{ context }}"}

To deploy your plugin on a cluster, you need to build an image and push it to an image registry first. {._abstract}

**Procedure**

1.  Build the image with the following command:
    ```terminal
    $ docker build -t quay.io/my-repositroy/my-plugin:latest .
    ```
1.  Optional: If you want to test your image, run the following command:
    ```terminal
    $ docker run -it --rm -d -p 9001:80 quay.io/my-repository/my-plugin:latest
    ```
1.  Push the image by running the following command:
    ```terminal
    $ docker push quay.io/my-repository/my-plugin:latest
    ```