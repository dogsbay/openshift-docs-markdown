{%- set _mod_docs_content_type = "CONCEPT" %}
# How to write source-to-image scripts {id="images-create-s2i-scripts_{{ context }}"}

Define mandatory Source-to-image (S2I) scripts, such as `assemble` and `run` to enable {{ product_title }} to build, customize, and execute highly reproducible container images. {._abstract}

You can write S2I scripts in any programming language, as long as the scripts are executable inside the builder image. S2I supports multiple options providing `assemble`/`run`/`save-artifacts` scripts. All of these locations are checked on each build in the following order:

1.  A script specified in the build configuration.
1.  A script found in the application source `.s2i/bin` directory.
1.  A script found at the default image URL with the `io.openshift.s2i.scripts-url` label.

Both the `io.openshift.s2i.scripts-url` label specified in the image and the script specified in a build configuration can take one of the following forms:

*   `image:///path_to_scripts_dir`: absolute path inside the image to a directory where the S2I scripts are located.
*   `$$file:///path_to_scripts_dir$$`: relative or absolute path to a directory on the host where the S2I scripts are located.
*   `http(s)://path_to_scripts_dir`: URL to a directory where the S2I scripts are located.

***S2I scripts***

<table>
<thead>
<tr>
  <th>Script</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>assemble</code></td>
  <td>The <code>assemble</code> script builds the application artifacts from a source and places them into appropriate directories inside the image. This script is required. The workflow for this script is:<br><br><ol><li>Optional: Restore build artifacts. If you want to support incremental builds, make sure to define <code>save-artifacts</code> as well.</li><li>Place the application source in the desired location.</li><li>Build the application artifacts.</li><li>Install the artifacts into locations appropriate for them to run.</li></ol></td>
</tr>
<tr>
  <td><code>run</code></td>
  <td>The <code>run</code> script executes your application. This script is required.</td>
</tr>
<tr>
  <td><code>save-artifacts</code></td>
  <td>The <code>save-artifacts</code> script gathers all dependencies that can speed up the build processes that follow. This script is optional. For example:<br><br><ul><li>For Ruby, <code>gems</code> installed by Bundler.</li><li>For Java, <code>.m2</code> contents.</li></ul>These dependencies are gathered into a <code>tar</code> file and streamed to the standard output.</td>
</tr>
<tr>
  <td><code>usage</code></td>
  <td>The <code>usage</code> script allows you to inform the user how to properly use your image. This script is optional.</td>
</tr>
<tr>
  <td><code>test/run</code></td>
  <td>The <code>test/run</code> script allows you to create a process to check if the image is working correctly. This script is optional. The proposed flow of that process is:<br><br><ol><li>Build the image.</li><li>Run the image to verify the <code>usage</code> script.</li><li>Run <code>s2i build</code> to verify the <code>assemble</code> script.</li><li>Optional: Run <code>s2i build</code> again to verify the <code>save-artifacts</code> and <code>assemble</code> scripts save and restore artifacts functionality.</li><li>Run the image to verify the test application is working.</li></ol><dl><dt>Note</dt><dd>The suggested location to put the test application built by your <code>test/run</code> script is the <code>test/test-app</code> directory in your image repository.</dd></dl></td>
</tr>
</tbody>
</table>

**Example S2I scripts**

The following example S2I scripts are written in Bash. Each example assumes its `tar` contents are unpacked into the `/tmp/s2i` directory.

```bash title="assemble script:"
#!/bin/bash

# restore build artifacts
if [ "$(ls /tmp/s2i/artifacts/ 2>/dev/null)" ]; then
    mv /tmp/s2i/artifacts/* $HOME/.
fi

# move the application source
mv /tmp/s2i/src $HOME/src

# build application artifacts
pushd ${HOME}
make all

# install the artifacts
make install
popd
```

```bash title="run script:"
#!/bin/bash

# run the application
/opt/application/run.sh
```

```bash title="save-artifacts script:"
#!/bin/bash

pushd ${HOME}
if [ -d deps ]; then
    # all deps contents to tar stream
    tar cf - deps
fi
popd
```

```bash title="usage script:"
#!/bin/bash

# inform the user how to use the image
cat <<EOF
This is a S2I sample builder image, to use it, install
https://github.com/openshift/source-to-image
EOF
```

**Additional resources**
{._additional-resources}

*   [S2I Image Creation Tutorial](https://blog.openshift.com/create-s2i-builder-image/)