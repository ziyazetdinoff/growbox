from flask import Flask, render_template, request, redirect
import pymysql
import json

app = Flask(__name__)


def get_stats():
    connection = pymysql.connect(
        password='password',
        host='growbox_database',
        port=3306,
        database='growbox'
    )
    print('successfully connected')
    print('#' * 20)
    cursor = connection.cursor()
    cursor.execute('SELECT temperature, humidity, acid FROM t_growbox')

    print("[debug]:", cursor)

    result = {}
    for row in cursor.fetchall():
        result['temperature'] = row[0]
        result['humidity'] = row[1]
        result['acid'] = row[2]

    cursor.close()
    connection.close()
    return json.dumps(result)


@app.route('/stats', methods=['GET'])
def index():
    try:
        return get_stats()
    except Exception as exc:
        return str(exc)



# @app.route('/colors', methods=['POST'])
# def post_colors():

#     if request.method == 'POST':
#         name = request.form['name']
#         author = request.form['author']
#         rating = int(request.form['rating'])

#         connection = pymysql.connect(
#             password='password',
#             host='growbox_database',
#             port=3306,
#             database='books'
#         )

#         cursor = connection.cursor()
#         sql_request = "INSERT INTO top_books (name, author, rating) VALUES ('{author}', '{name}', {rating});".format(author=author, name=name,rating=rating) 
#         cursor.execute(sql_request)
#         connection.commit()

#         cursor.close()
#         connection.close()
#         return redirect('/')
#     else:
#         return render_template('add.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)