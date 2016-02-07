JROPG_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo jropg dir is $JROPG_DIR
export JAVA_HOME=$(/usr/libexec/java_home -v 1.7)
echo JAVA_HOME=$JAVA_HOME
export PATH=$JROPG_DIR/apache-maven-3.3.9/bin:$PATH
echo mvn is $JROPG_DIR/apache-maven-3.3.9/bin/mvn
