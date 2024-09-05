from flask import Flask, jsonify, request

app = Flask(__name__)

game_state = {
    'board': [' ' for _ in range(9)],
    'current_player': 'X'
}

@app.route('/game_state', methods=['GET'])
def get_game_state():
    return jsonify(game_state)

@app.route('/make_move', methods=['POST'])
def make_move():
    data = request.json
    move = data['move']
    if game_state['board'][move] == ' ':
        game