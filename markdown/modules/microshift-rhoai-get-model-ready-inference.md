{%- set _mod_docs_content_type = "PROCEDURE" %}
# Getting your AI model ready for inference {id="microshift-rhoai-get-model-ready-inference_{{ context }}"}

Before querying your AI model through the API, you can get the model ready to provide answers based on the training data.  {._abstract}

The following examples continue with the OVMS model.

**Prerequisites**

*   {{ microshift_short }} is running.
*   You have the `xxd` utility, which is part of the `vim-common` package.
*   You configured the model-serving runtime.
*   You uploaded your AI model to {{ microshift_short }}.

**Procedure**

1.  Download an image of a bee from the {{ ovms }} examples by running the following command:
    ```terminal
    $ curl -O https://raw.githubusercontent.com/openvinotoolkit/model_server/main/demos/common/static/images/bee.jpeg
    ```
1.  Create the request data by running the following script:
    ```bash
    IMAGE=./bee.jpeg
    REQ=./request.json

    # Add an inference header
    echo -n '{"inputs" : [{"name": "0", "shape": [1], "datatype": "BYTES"}]}' > "${REQ}"
    # Get the size of the inference header
    HEADER_LEN="$(stat -c %s "${REQ}")"
    # Add size of the data (image) in binary format (4 bytes, little endian)
    printf "%08X" $(stat --format=%s "${IMAGE}") | sed 's/\(..\)/\1\n/g' | tac | tr -d '\n' | xxd -r -p >> "${REQ}"
    # Add the data, that is, append the image to the request file
    cat "${IMAGE}" >> "${REQ}"
    ```
    *   The inference header size must be passed to {{ ovms }} later in the form of an HTTP header.
    *   The {{ ovms }} requires 4 bytes in little endian byte order.